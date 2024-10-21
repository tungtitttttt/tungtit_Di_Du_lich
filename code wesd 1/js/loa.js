//tung tit


//chỉnh ngôn ngữ
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'vi', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  }
document.addEventListener("DOMContentLoaded", function() {
    // Lấy dữ liệu từ localStorage nếu có
    let du_lieu = JSON.parse(localStorage.getItem("thong_tin_id")) || [];

    // Lắng nghe sự kiện khi form submit
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn form gửi đi và tải lại trang

        // Lấy giá trị nhập từ các ô input
        const nhap_ten = document.getElementById("name").value.trim();
        const email_nhap = document.getElementById("email").value.trim();
        const password_nhap = document.getElementById("password").value.trim();
        const passwordid_nhap = document.getElementById("passwordid").value.trim();

        // Lấy các thẻ thông báo lỗi
        const nhap_ten_loi = document.getElementById("nhap_ten_loi");
        const email_nhap_loi = document.getElementById("email_nhap_loi");
        const password_nhap_loi = document.getElementById("password_nhap_loi");
        const password_pro_loi = document.getElementById("password_pro_loi");
        const passwordid_nhap_loi = document.getElementById("passwordid_nhap_loi");
        const kiem_tra = document.getElementById("kiem_tra");

        // Biến kiểm tra tính hợp lệ của form
        let hien_ra = true;

        // Kiểm tra tên người dùng
        if (nhap_ten === "") {
            nhap_ten_loi.style.display = "block";
            hien_ra = false;
        } else {
            nhap_ten_loi.style.display = "none";
        }

        // Kiểm tra email
        if (email_nhap === "") {
            email_nhap_loi.style.display = "block";
            hien_ra = false;
        } else {
            email_nhap_loi.style.display = "none";
        }

        // Kiểm tra mật khẩu
        if (password_nhap === "") {
            password_nhap_loi.style.display = "block";
            hien_ra = false;
        } else {
            password_nhap_loi.style.display = "none";
        }

        // Kiểm tra mật khẩu nâng cao
        const promax = /^(?=.*[A-Z])(?=.*\d).{3,}$/;
        if (!promax.test(password_nhap)) {
            password_pro_loi.style.display = "block";
            hien_ra = false;
        } else {
            password_pro_loi.style.display = "none";
        }

        // Kiểm tra xác nhận mật khẩu
        if (passwordid_nhap === "" || passwordid_nhap !== password_nhap) {
            passwordid_nhap_loi.style.display = "block";
            hien_ra = false;
        } else {
            passwordid_nhap_loi.style.display = "none";
        }

        // Nếu form hợp lệ, hiển thị thông báo thành công và in thông tin người dùng ra console
        if (hien_ra) {
            kiem_tra.style.display = "block";

            // Tạo đối tượng thông tin người dùng
            const thong_tin_id = {
                id: Math.ceil(Math.random() * 100000),
                name: nhap_ten,
                email: email_nhap,
                password: password_nhap
            };
            
            console.log(thong_tin_id);

            // Đẩy thông tin người dùng vào mảng du_lieu
            du_lieu.push(thong_tin_id);

            // Lưu trữ dữ liệu vào localStorage
            localStorage.setItem("thong_tin_id", JSON.stringify(du_lieu));

            // Chuyển hướng sau khi đăng ký thành công (ví dụ)
            setTimeout(function() {
                window.location.href = "dangnhap.html";
            }, 1000); // Chuyển hướng sau 1 giây
        }
    });
});
