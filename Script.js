// Dữ liệu việc mẫu
const jobs = [
  {
    id: 1,
    title: "Giao hàng thực phẩm nhanh",
    category: "giaohang",
    location: "quan3",
    locationText: "Quận 3",
    time: "Trong 30 phút",
    price: "180.000đ",
    priceUnit: "/ chuyến",
    urgent: true,
    description: "Cần shipper giao 1 đơn hàng thực phẩm từ nhà hàng đến khách tại Quận 3. Đơn hàng nhỏ, dễ mang. Ưu tiên người có xe máy và biết đường.",
    requirements: ["Có xe máy", "Biết đường Quận 3", "Có thể nhận việc ngay"],
    icon: "fa-bicycle"
  },
  {
    id: 2,
    title: "Dọn dẹp căn hộ 2 phòng ngủ",
    category: "dondep",
    location: "binhthanh",
    locationText: "Bình Thạnh",
    time: "Hôm nay 14:00",
    price: "350.000đ",
    priceUnit: "/ buổi",
    urgent: true,
    description: "Cần người dọn dẹp căn hộ 2PN tại Bình Thạnh. Công việc bao gồm lau nhà, quét dọn, vệ sinh nhà tắm. Thời gian khoảng 3-4 tiếng.",
    requirements: ["Kinh nghiệm dọn dẹp", "Mang theo dụng cụ cơ bản", "Đúng giờ"],
    icon: "fa-broom"
  },
  {
    id: 3,
    title: "Sửa máy lạnh không mát",
    category: "suachua",
    location: "quan7",
    locationText: "Quận 7",
    time: "Ngày mai",
    price: "250.000đ",
    priceUnit: " + linh kiện",
    urgent: false,
    description: "Máy lạnh Toshiba 1.5HP không mát. Cần thợ kiểm tra và sửa chữa. Có thể là hết gas hoặc hỏng board.",
    requirements: ["Thợ sửa điện lạnh", "Có dụng cụ chuyên dụng", "Báo giá trước khi làm"],
    icon: "fa-screwdriver-wrench"
  },
  {
    id: 4,
    title: "Phục vụ tiệc tối tại nhà",
    category: "phucvu",
    location: "quan1",
    locationText: "Quận 1",
    time: "Tối nay 18:00",
    price: "400.000đ",
    priceUnit: "/ buổi",
    urgent: true,
    description: "Cần 2 người phục vụ tiệc tối tại nhà riêng Quận 1. Khoảng 12 khách. Công việc: sắp bàn, phục vụ đồ ăn/uống, dọn dẹp sau tiệc.",
    requirements: ["Ngoại hình sạch sẽ", "Có kinh nghiệm phục vụ", "Lịch sự, nhanh nhẹn"],
    icon: "fa-utensils"
  },
  {
    id: 5,
    title: "Giao hàng online Shopee",
    category: "giaohang",
    location: "thuduc",
    locationText: "Thủ Đức",
    time: "Linh hoạt",
    price: "25.000đ",
    priceUnit: "/ đơn",
    urgent: false,
    description: "Cần người giao hàng Shopee khu vực Thủ Đức. Có thể nhận nhiều đơn trong ngày. Thanh toán cuối ngày.",
    requirements: ["Có xe máy", "Biết dùng app Shopee", "Trách nhiệm"],
    icon: "fa-box"
  },
  {
    id: 6,
    title: "Vệ sinh văn phòng cuối tuần",
    category: "dondep",
    location: "quan1",
    locationText: "Quận 1",
    time: "Chủ nhật",
    price: "500.000đ",
    priceUnit: "/ buổi",
    urgent: false,
    description: "Vệ sinh văn phòng 80m² tại Quận 1. Công việc định kỳ cuối tuần. Bao gồm lau sàn, lau bàn ghế, vệ sinh toilet.",
    requirements: ["Kinh nghiệm vệ sinh văn phòng", "Có thể làm cuối tuần", "Cẩn thận"],
    icon: "fa-building"
  }
];

let currentCategory = 'all';

// Render danh sách việc
function renderJobs(filteredJobs) {
  const container = document.getElementById('jobList');
  document.getElementById('jobCount').textContent = filteredJobs.length;

  if (filteredJobs.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-400">
        <i class="fa-solid fa-inbox text-4xl mb-3"></i>
        <p class="text-sm">Không tìm thấy việc phù hợp</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredJobs.map(job => `
    <div class="job-card bg-white border border-slate-100 rounded-2xl p-4 card-shadow cursor-pointer" onclick="showJobDetail(${job.id})">
      <div class="flex items-start gap-3">
        <div class="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
          <i class="fa-solid ${job.icon} text-teal-600"></i>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-2">
            <h3 class="font-semibold text-slate-800 text-[15px] leading-snug">${job.title}</h3>
            ${job.urgent ? '<span class="flex-shrink-0 text-[10px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">GẤP</span>' : ''}
          </div>
          <p class="text-slate-500 text-xs mt-1 flex items-center gap-1.5">
            <i class="fa-solid fa-location-dot text-[10px]"></i>
            ${job.locationText} · ${job.time}
          </p>
          <div class="flex items-center justify-between mt-2.5">
            <span class="text-teal-600 font-bold text-sm">${job.price}<span class="text-slate-400 font-normal text-xs">${job.priceUnit}</span></span>
            <button class="text-teal-600 text-xs font-semibold flex items-center gap-1 hover:underline">
              Xem chi tiết <i class="fa-solid fa-chevron-right text-[9px]"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Lọc việc
function filterJobs() {
  const search = document.getElementById('searchInput').value.toLowerCase().trim();
  const location = document.getElementById('locationSelect').value;
  const urgentOnly = document.getElementById('urgentOnly').checked;

  let filtered = jobs.filter(job => {
    const matchCategory = currentCategory === 'all' || job.category === currentCategory;
    const matchSearch = !search || job.title.toLowerCase().includes(search) || job.description.toLowerCase().includes(search);
    const matchLocation = location === 'all' || job.location === location;
    const matchUrgent = !urgentOnly || job.urgent;
    return matchCategory && matchSearch && matchLocation && matchUrgent;
  });

  renderJobs(filtered);
}

// Chọn danh mục
function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-teal-600', 'text-white');
    btn.classList.add('bg-white', 'text-slate-600');
  });
  event.target.classList.add('active', 'bg-teal-600', 'text-white');
  event.target.classList.remove('bg-white', 'text-slate-600');
  filterJobs();
}

// Chuyển tab điều hướng
function setNav(page) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    item.classList.add('text-slate-400');
  });
  event.currentTarget.classList.add('active');
  event.currentTarget.classList.remove('text-slate-400');
  
  if (page === 'danhan') {
    showToast('Bạn chưa nhận việc nào');
  }
}

// Hiện chi tiết việc
function showJobDetail(id) {
  const job = jobs.find(j => j.id === id);
  if (!job) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="flex items-center gap-3 mb-4">
      <div class="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center">
        <i class="fa-solid ${job.icon} text-teal-600 text-xl"></i>
      </div>
      <div>
        <h2 class="text-lg font-bold text-slate-900 leading-snug">${job.title}</h2>
        ${job.urgent ? '<span class="inline-flex items-center gap-1 text-xs font-bold text-amber-600 mt-0.5"><i class="fa-solid fa-bolt"></i> Cần người ngay</span>' : ''}
      </div>
    </div>

    <div class="bg-slate-50 rounded-xl p-4 mb-4 space-y-2">
      <div class="flex items-center gap-2 text-sm">
        <i class="fa-solid fa-location-dot text-teal-600 w-5"></i>
        <span>${job.locationText}</span>
      </div>
      <div class="flex items-center gap-2 text-sm">
        <i class="fa-solid fa-clock text-teal-600 w-5"></i>
        <span>${job.time}</span>
      </div>
      <div class="flex items-center gap-2 text-sm">
        <i class="fa-solid fa-money-bill-wave text-teal-600 w-5"></i>
        <span class="font-bold text-teal-700">${job.price}${job.priceUnit}</span>
      </div>
    </div>

    <div class="mb-4">
      <h4 class="font-semibold text-slate-800 mb-2">Mô tả công việc</h4>
      <p class="text-slate-600 text-sm leading-relaxed">${job.description}</p>
    </div>

    <div class="mb-6">
      <h4 class="font-semibold text-slate-800 mb-2">Yêu cầu</h4>
      <ul class="space-y-1.5">
        ${job.requirements.map(r => `
          <li class="flex items-start gap-2 text-sm text-slate-600">
            <i class="fa-solid fa-check text-teal-500 mt-0.5 text-xs"></i>
            <span>${r}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <button onclick="acceptJob(${job.id})" class="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-xl transition flex items-center justify-center gap-2">
      <i class="fa-solid fa-handshake"></i>
      Nhận việc này
    </button>
  `;

  document.getElementById('jobModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Đóng modal
function closeModal() {
  document.getElementById('jobModal').classList.add('hidden');
  document.body.style.overflow = '';
}

// Nhận việc
function acceptJob(id) {
  closeModal();
  showToast('Đã gửi yêu cầu nhận việc! Chủ việc sẽ liên hệ sớm.');
}

// Hiện thông báo
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('opacity-0');
  toast.classList.add('opacity-100');
  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
  }, 2500);
}

// Khởi tạo
renderJobs(jobs);