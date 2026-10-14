document.addEventListener('DOMContentLoaded', () => {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const searchInput = document.getElementById('searchInput');
    const locationSelect = document.getElementById('locationSelect');
    const urgentCheck = document.getElementById('urgentCheck');
    const btnPostJob = document.getElementById('btnPostJob');

    // Chuyển màu active khi nhấn vào các nút danh mục
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryBtns.forEach(b => {
                b.classList.remove('bg-slate-900', 'text-white', 'shadow-sm');
                b.classList.add('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
            });
            const clickedBtn = e.currentTarget;
            clickedBtn.classList.remove('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
            clickedBtn.classList.add('bg-slate-900', 'text-white', 'shadow-sm');
        });
    });

    // Sự kiện nút đăng việc gấp
    btnPostJob.addEventListener('click', () => {
        alert('Mở form đăng việc gấp!');
    });

    // Lắng nghe thao tác tìm kiếm
    searchInput.addEventListener('input', (e) => {
        console.log('Từ khóa tìm kiếm:', e.target.value);
    });

    locationSelect.addEventListener('change', (e) => {
        console.log('Khu vực đã chọn:', e.target.value);
    });

    urgentCheck.addEventListener('change', (e) => {
        console.log('Lọc chỉ việc gấp:', e.target.checked);
    });
});