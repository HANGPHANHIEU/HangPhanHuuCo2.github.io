// Xử lý sự kiện tương tác giao diện
// Đợi cho toàn bộ tài liệu HTML được tải xong hoàn toàn rồi mới thực thi các đoạn mã bên trong để tránh lỗi gọi phần tử chưa xuất hiện
document.addEventListener('DOMContentLoaded', () => {
    
    // Khai báo các hằng số (constants) để lưu trữ các phần tử HTML cần tương tác thông qua ID hoặc Class
    const categoryBtns = document.querySelectorAll('.category-btn'); // Lấy danh sách tất cả các nút danh mục
    const searchInput = document.getElementById('searchInput');         // Lấy ô nhập nội dung tìm kiếm
    const locationSelect = document.getElementById('locationSelect');   // Lấy hộp lựa chọn khu vực
    const urgentCheck = document.getElementById('urgentCheck');         // Lấy hộp kiểm "Chỉ việc gấp"
    const btnPostJob = document.getElementById('btnPostJob');           // Lấy nút "Đăng việc gấp" trên header

    // Chuyển đổi trạng thái nút danh mục khi bấm
    // Duyệt qua từng nút danh mục trong danh sách categoryBtns
    categoryBtns.forEach(btn => {
        // Lắng nghe sự kiện người dùng bấm (click) vào một nút danh mục bất kỳ
        btn.addEventListener('click', (e) => {
            
            // Bước 1: Xóa giao diện đang chọn của TẤT CẢ các nút (đưa về trạng thái mặc định: nền xám nhạt, chữ xám)
            categoryBtns.forEach(b => {
                b.classList.remove('bg-slate-900', 'text-white', 'shadow-sm'); // Xóa class kiểu nút đang được chọn
                b.classList.add('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200'); // Thêm class kiểu nút bình thường
            });
            
            // Bước 2: Thiết lập giao diện nổi bật cho RIÊNG nút vừa được người dùng bấm vào
            const clickedBtn = e.currentTarget; // Lấy nút hiện tại đang được click
            clickedBtn.classList.remove('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200'); // Xóa kiểu bình thường
            clickedBtn.classList.add('bg-slate-900', 'text-white', 'shadow-sm'); // Thêm kiểu nút được chọn (nền tối, chữ trắng, có bóng mờ)
        });
    });

    // Mô phỏng tính năng Đăng việc gấp
    // Lắng nghe sự kiện click vào nút "Đăng việc gấp"
    btnPostJob.addEventListener('click', () => {
        // Hiển thị một hộp thoại thông báo (alert) nhỏ trên trình duyệt
        alert('Chức năng đăng việc gấp đang được mở trên hệ thống mẫu.');
    });

    // Lắng nghe thay đổi tìm kiếm
    // Lắng nghe sự kiện người dùng nhập liệu vào ô tìm kiếm (mỗi khi gõ một ký tự)
    searchInput.addEventListener('input', (e) => {
        // In ra cửa sổ console của trình duyệt giá trị mà người dùng đang tìm kiếm theo thời gian thực
        console.log('Đang tìm kiếm:', e.target.value);
    });

    // Lắng nghe sự kiện thay đổi tùy chọn khu vực trong hộp select
    locationSelect.addEventListener('change', (e) => {
        // In ra cửa sổ console tên khu vực mới mà người dùng vừa chọn từ danh sách thả xuống
        console.log('Đã chọn khu vực:', e.target.value);
    });

    // Lắng nghe sự kiện thay đổi trạng thái của hộp kiểm "Chỉ việc gấp"
    urgentCheck.addEventListener('change', (e) => {
        // In ra cửa sổ console trạng thái true (đã tích chọn) hoặc false (bỏ tích chọn)
        console.log('Lọc chỉ việc gấp:', e.target.checked);
    });
});