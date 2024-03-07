@echo off


rem Specify the directory where you want to place the executable
set "install_dir=C:\Program Files\ctodo"

rem Create the installation directory if it doesn't exist
if not exist "%install_dir%" mkdir "%install_dir%"

rem Check if the executable already exists in the installation directory
if exist "%install_dir%\ctodo.exe" (
    echo Replacing existing executable...
    copy /Y ctodo.exe "%install_dir%"
) else (
    echo Installing new executable...
    copy ctodo.exe "%install_dir%"
)

rem Add the installation directory to the PATH if not already included
set "path_key=HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment"
for /f "tokens=2,*" %%A in ('reg query "%path_key%" /v Path ^| findstr /c:"REG_EXPAND_SZ"') do (
    set "current_path=%%B"
)

echo %current_path% | findstr /i /c:"%install_dir%" >nul
if %errorlevel% neq 0 (
    set "new_path=%install_dir%;%current_path%"
    reg add "%path_key%" /v Path /t REG_EXPAND_SZ /d "%new_path%" /f
)

echo Configuration completed. 'ctodo' is now available globally.
