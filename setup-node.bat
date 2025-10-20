@echo off
echo Ativando Node.js 22.20.0...
call nvm use 22.20.0
if errorlevel 1 (
    echo Erro ao ativar Node.js via nvm
    echo.
    echo O problema pode ser devido a espacos no nome do usuario.
    echo Solucao: Reinstalar Node.js diretamente sem usar nvm
    echo.
    echo Visite: https://nodejs.org/
    pause
    exit /b 1
)
echo.
echo Node.js ativado com sucesso!
echo.
node --version
npm --version
echo.
echo Agora instalando dependencias do frontend...
cd frontend
call npm install
if errorlevel 1 (
    echo Erro ao instalar dependencias do frontend
    pause
    exit /b 1
)
echo.
echo Dependencias instaladas com sucesso!
echo.
pause
