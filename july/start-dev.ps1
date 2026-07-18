Write-Host "Starting Next.js development server..."
Write-Host "Please wait a moment..."
npm run dev
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: npm is not recognized or the server failed to start."
    Write-Host "Please make sure Node.js is installed on your computer."
}
Write-Host ""
Write-Host "Press any key to close this window..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
