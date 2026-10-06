@echo off
chcp 65001 >nul
echo ========================================================
echo   9ROUTER AUTO-SYNC & UPDATE TOOL (Phucstack Fork)
echo ========================================================
echo.
echo [1/3] Dang lay ma nguon moi nhat tu tac gia (decolua/9router)...
git fetch upstream

echo [2/3] Dong bo nhanh master voi tac gia...
git checkout master
git merge upstream/master
git push origin master

echo [3/3] Hop nhat tinh nang moi vao nhanh custom-patches...
git checkout custom-patches
git merge master -m "chore: sync updates from upstream"
git push origin custom-patches

echo.
echo ========================================================
echo   CAP NHAT THANH CONG! TOAN BO TINH NANG DUOC GIU NGUYEN!
echo ========================================================
pause
