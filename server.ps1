# Shreeji Na Saaj - High-Performance Cross-Platform Web Server
# Uses System.Net.Sockets.TcpListener for 100% Non-Admin Wi-Fi Mobile & PC Access

$port = 8080
$baseDir = $PSScriptRoot
if (-not $baseDir) { $baseDir = Get-Location }

# Detect Local IPv4 Address (Wi-Fi / LAN)
$localIp = (Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue | Where-Object { 
    $_.InterfaceAlias -notlike "*Loopback*" -and $_.InterfaceAlias -notlike "*vEthernet*" -and $_.IPAddress -notlike "169.254.*" 
} | Select-Object -ExpandProperty IPAddress -First 1)

if (-not $localIp) {
    $localIp = "127.0.0.1"
}

$localUrl = "http://localhost:$port/"
$mobileUrl = "http://${localIp}:$port/"

# Try binding on port 8080, fallback to 8081 if occupied
$listener = $null
try {
    $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $port)
    $listener.Start()
} catch {
    $port = 8081
    $localUrl = "http://localhost:$port/"
    $mobileUrl = "http://${localIp}:$port/"
    $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $port)
    $listener.Start()
}

Clear-Host
Write-Host "======================================================================" -ForegroundColor Yellow
Write-Host "         ॥ શ્રી ગોપીજનવલ્લભાય નમઃ ॥ શ્રીજી ના સાજ                     " -ForegroundColor Cyan
Write-Host "         Shreeji Na Saaj - Cross-Platform Web Server Running          " -ForegroundColor Green
Write-Host "======================================================================" -ForegroundColor Yellow
Write-Host ""
Write-Host "  [PC પર ચલાવવા લિંક]          : " -NoNewline -ForegroundColor White
Write-Host "$localUrl" -ForegroundColor Green
Write-Host "  [મોબાઇલમાં ચલાવવા લિંક (Phone)] : " -NoNewline -ForegroundColor White
Write-Host "$mobileUrl" -ForegroundColor Cyan
Write-Host ""
Write-Host "  >> મોબાઇલ ઇન્સ્ટોલ રીત:" -ForegroundColor Yellow
Write-Host "     1. તમારો ફોન અને આ કમ્પ્યુટર એક જ Wi-Fi / Hotspot સાથે જોડાયેલા રાખો." -ForegroundColor Gray
Write-Host "     2. ફોનના કેમેરાથી એપમાં રહેલો QR Code સ્કેન કરો અથવા આ લિંક Chrome/Safari માં ખોલો." -ForegroundColor Gray
Write-Host "     3. 'Install app' અથવા 'Add to Home screen' દબાવો." -ForegroundColor Gray
Write-Host "======================================================================" -ForegroundColor Yellow
Write-Host "સર્વર શરૂ થઈ ગયું છે. બ્રાઉઝર ખૂલી રહ્યું છે... (સર્વર બંધ કરવા Ctrl + C દબાવો)" -ForegroundColor Gray
Write-Host ""

# Auto open PC browser
try {
    Start-Process $localUrl
} catch {}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".ico"  = "image/x-icon"
    ".woff2"= "font/woff2"
    ".woff" = "font/woff"
    ".ttf"  = "font/ttf"
}

# Main Request Loop
while ($true) {
    try {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::UTF8)

        $requestLine = $reader.ReadLine()
        if (-not [string]::IsNullOrEmpty($requestLine)) {
            $parts = $requestLine.Split(" ")
            if ($parts.Length -ge 2) {
                $method = $parts[0]
                $rawUrl = $parts[1]

                # Strip query string and fragment
                $path = $rawUrl.Split("?")[0].Split("#")[0]
                if ($path -eq "/" -or $path -eq "") {
                    $path = "/index.html"
                }

                # REST API Endpoints for Central Shared Database
                if ($path -eq "/api/data" -and $method -eq "GET") {
                    $dbFile = Join-Path $baseDir "database.json"
                    $jsonContent = "{}"
                    if (Test-Path $dbFile) {
                        $jsonContent = [System.IO.File]::ReadAllText($dbFile, [System.Text.Encoding]::UTF8)
                    } else {
                        $jsonContent = '{"orders":[],"expenses":[],"karigars":[],"customers":[],"settings":{}}'
                    }
                    $bodyBytes = [System.Text.Encoding]::UTF8.GetBytes($jsonContent)
                    $header = "HTTP/1.1 200 OK`r`n" +
                              "Content-Type: application/json; charset=utf-8`r`n" +
                              "Content-Length: $($bodyBytes.Length)`r`n" +
                              "Access-Control-Allow-Origin: *`r`n" +
                              "Access-Control-Allow-Methods: GET, POST, OPTIONS`r`n" +
                              "Access-Control-Allow-Headers: Content-Type`r`n" +
                              "Connection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($bodyBytes, 0, $bodyBytes.Length)
                    $stream.Flush()
                } elseif ($path -eq "/api/save" -and $method -eq "POST") {
                    $contentLength = 0
                    while ($true) {
                        $line = $reader.ReadLine()
                        if ([string]::IsNullOrEmpty($line)) { break }
                        if ($line.ToLower().StartsWith("content-length:")) {
                            $contentLength = [int]($line.Split(":")[1].Trim())
                        }
                    }
                    if ($contentLength -gt 0) {
                        $buffer = New-Object char[] $contentLength
                        $readCount = 0
                        while ($readCount -lt $contentLength) {
                            $n = $reader.Read($buffer, $readCount, $contentLength - $readCount)
                            if ($n -le 0) { break }
                            $readCount += $n
                        }
                        $bodyStr = New-Object string ($buffer, 0, $readCount)
                        $dbFile = Join-Path $baseDir "database.json"
                        [System.IO.File]::WriteAllText($dbFile, $bodyStr, [System.Text.Encoding]::UTF8)
                    }
                    $resp = '{"status":"success","savedAt":"' + (Get-Date -Format "yyyy-MM-ddTHH:mm:ss") + '"}'
                    $bodyBytes = [System.Text.Encoding]::UTF8.GetBytes($resp)
                    $header = "HTTP/1.1 200 OK`r`n" +
                              "Content-Type: application/json; charset=utf-8`r`n" +
                              "Content-Length: $($bodyBytes.Length)`r`n" +
                              "Access-Control-Allow-Origin: *`r`n" +
                              "Access-Control-Allow-Methods: GET, POST, OPTIONS`r`n" +
                              "Access-Control-Allow-Headers: Content-Type`r`n" +
                              "Connection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($bodyBytes, 0, $bodyBytes.Length)
                    $stream.Flush()
                } elseif ($method -eq "OPTIONS") {
                    $header = "HTTP/1.1 204 No Content`r`n" +
                              "Access-Control-Allow-Origin: *`r`n" +
                              "Access-Control-Allow-Methods: GET, POST, OPTIONS`r`n" +
                              "Access-Control-Allow-Headers: Content-Type`r`n" +
                              "Content-Length: 0`r`n" +
                              "Connection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Flush()
                } else {
                    $relativeFile = $path.TrimStart('/').Replace('/', '\')
                    $fullPath = Join-Path $baseDir $relativeFile

                    if (Test-Path -Path $fullPath -PathType Leaf) {
                        $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()
                        $mime = "application/octet-stream"
                        if ($mimeTypes.ContainsKey($ext)) {
                            $mime = $mimeTypes[$ext]
                        }

                        $fileBytes = [System.IO.File]::ReadAllBytes($fullPath)
                        $header = "HTTP/1.1 200 OK`r`n" +
                                  "Content-Type: $mime`r`n" +
                                  "Content-Length: $($fileBytes.Length)`r`n" +
                                  "Access-Control-Allow-Origin: *`r`n" +
                                  "Cache-Control: public, max-age=60`r`n" +
                                  "Connection: close`r`n`r`n"

                        $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($headerBytes, 0, $headerBytes.Length)
                        $stream.Write($fileBytes, 0, $fileBytes.Length)
                        $stream.Flush()
                    } else {
                        $notFound = "HTTP/1.1 404 Not Found`r`nContent-Length: 0`r`nConnection: close`r`n`r`n"
                        $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes($notFound)
                        $stream.Write($notFoundBytes, 0, $notFoundBytes.Length)
                        $stream.Flush()
                    }
                }
            }
        }

        $stream.Close()
        $client.Close()
    } catch {
        # Continue loop on connection reset
    }
}
