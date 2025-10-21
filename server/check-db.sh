#!/bin/bash
# FANFANTV 이미지 관리 스크립트

DB_PATH="/Users/minjun/Git/FANFANTV/server/fanfantv.db"

echo "======================================"
echo "📊 FANFANTV 데이터베이스 현황"
echo "======================================"
echo ""

echo "👥 등록된 사용자:"
sqlite3 "$DB_PATH" "SELECT id, email, created_at FROM users;"
echo ""

echo "🖼️  업로드된 이미지:"
sqlite3 "$DB_PATH" "SELECT id, original_name, uploaded_by, created_at FROM images;"
echo ""

echo "💾 실제 파일 크기:"
du -sh /Users/minjun/Git/FANFANTV/server/uploads 2>/dev/null || echo "uploads 폴더 없음"
echo ""

echo "📁 파일 개수:"
ls -1 /Users/minjun/Git/FANFANTV/server/uploads 2>/dev/null | wc -l
echo ""
