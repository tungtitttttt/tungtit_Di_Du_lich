
//chỉnh ngôn ngữ
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'vi', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
document.addEventListener("DOMContentLoaded", function() {
    const formregister = document.getElementById("form");

    formregister.addEventListener("submit", function (e) {
        e.preventDefault();

        const email_nhap = document.getElementById("email");
        const password_nhap = document.getElementById("password");

        const email_nhap_loi = document.getElementById("email_nhap_loi");
        const password_nhap_loi = document.getElementById("password_nhap_loi");
        const kiem_tra = document.getElementById("kiem_tra");

        // Lấy dữ liệu từ LocalStorage
        const du_lieu = (JSON.parse(localStorage.getItem("thong_tin_id")) || []);
        console.log(du_lieu)
        // Hàm kiểm tra định dạng email
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        // Kiểm tra tính hợp lệ của form
        let hien_ra = true;

        // Kiểm tra email
        if (!email_nhap.value || !validateEmail(email_nhap.value)) {
            email_nhap_loi.style.display = "block";
            hien_ra = false;
        } else {
            email_nhap_loi.style.display = "none";
        }
        // Kiểm tra mật khẩu
        if (!password_nhap.value) {
            password_nhap_loi.style.display = "block";
            hien_ra = false;
        } else {
            password_nhap_loi.style.display = "none";
        }

        if (hien_ra) {
            const thong_tin_id = du_lieu.find(user => user.email === email_nhap.value && user.password === password_nhap.value);
        
            if (thong_tin_id) {
                // Đăng nhập thành công
                kiem_tra.innerHTML = "Đăng nhập thành công";
                kiem_tra.style.display = "block";
                
                // Lưu thông tin người dùng vào localStorage
                localStorage.setItem("ten", JSON.stringify(thong_tin_id.name));

                // Chuyển trang sau khi đăng nhập thành công
                setTimeout(function(){
                    window.location.href = "index.html";
                }, 1000);
            } else {
                // Đăng nhập thất bại
                kiem_tra.innerHTML = "Email hoặc mật khẩu không đúng";
                kiem_tra.style.display = "block";
            }
        }
    });
});
