// Lấy các phần tử HTML
const thongBao = document.getElementById('thong-bao');
const btnThayDoi = document.getElementById('btn-thaydoi');

// Thêm sự kiện click cho nút
btnThayDoi.addEventListener('click', function() {
    thongBao.textContent = 'Văn bản đã được thay đổi bởi JavaScript!';
    thongBao.style.color = 'red'; // Thay đổi màu sắc văn bản
});

