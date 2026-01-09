import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Register() {
    const { t } = useContext(LanguageContext) || { t: (k) => k };

    const [form, setForm] = useState({
        memberType: "individual", // Mới: Cá nhân / Tổ chức
        fullName: "",
        gender: "male",
        dob: "",
        idNumber: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        district: "",
        organization: "",
        position: "",
        note: "",
        agree: false,
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const validate = () => {
        const e = {};
        if (!form.fullName.trim()) e.fullName = t("Vui lòng nhập họ và tên");
        if (!form.memberType) e.memberType = t("Vui lòng chọn loại thành viên");
        if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = t("Email không hợp lệ");
        if (!form.phone.match(/^[0-9()+\-\s]{9,15}$/)) e.phone = t("Số điện thoại không hợp lệ (9-15 số)");
        if (!form.idNumber.trim()) e.idNumber = t("Vui lòng nhập CMND/CCCD/Hộ chiếu");
        if (!form.agree) e.agree = t("Bạn cần đồng ý điều khoản sử dụng");
        // Thêm required cho một số trường nếu cần
        if (form.memberType === "organization" && !form.organization.trim()) {
            e.organization = t("Vui lòng nhập tên cơ quan/đơn vị");
        }
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
        setErrors((s) => ({ ...s, [name]: undefined }));
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setMessage(null);
        if (!validate()) return;
        setLoading(true);
        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Lỗi đăng ký");
            setMessage({ type: "success", text: t("Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.") });
            // Reset form
            setForm({
                memberType: "individual",
                fullName: "",
                gender: "male",
                dob: "",
                idNumber: "",
                email: "",
                phone: "",
                address: "",
                city: "",
                district: "",
                organization: "",
                position: "",
                note: "",
                agree: false,
            });
        } catch (err) {
            setMessage({ type: "error", text: err.message || t("Có lỗi xảy ra, vui lòng thử lại!") });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 bg-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
                {t("ĐĂNG KÝ THÀNH VIÊN")}
            </h1>

            {message && (
                <div
                    className={`p-4 mb-8 rounded-lg text-center font-medium ${
                        message.type === "success"
                            ? "bg-green-100 text-green-800 border border-green-300"
                            : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                >
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Loại thành viên - Mới */}
                <div className="md:col-span-2">
                    <label className="block text-lg font-semibold text-gray-800 mb-2">
                        {t("Loại thành viên")} <span className="text-red-600">*</span>
                    </label>
                    <div className="flex gap-8">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="memberType"
                                value="individual"
                                checked={form.memberType === "individual"}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            {t("Cá nhân")}
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="memberType"
                                value="organization"
                                checked={form.memberType === "organization"}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            {t("Tổ chức / Doanh nghiệp")}
                        </label>
                    </div>
                    {errors.memberType && <p className="text-red-600 text-sm mt-1">{errors.memberType}</p>}
                </div>

                {/* Họ và tên */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Họ và tên")} <span className="text-red-600">*</span>
                    </label>
                    <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                </div>

                {/* Giới tính */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Giới tính")}
                    </label>
                    <select
                        name="gender"
                        value={form.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="male">{t("Nam")}</option>
                        <option value="female">{t("Nữ")}</option>
                        <option value="other">{t("Khác")}</option>
                    </select>
                </div>

                {/* Ngày sinh */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Ngày sinh")}
                    </label>
                    <input
                        type="date"
                        name="dob"
                        value={form.dob}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* CMND/CCCD/Hộ chiếu */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Số CMND/CCCD/Hộ chiếu")} <span className="text-red-600">*</span>
                    </label>
                    <input
                        name="idNumber"
                        value={form.idNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {errors.idNumber && <p className="text-red-600 text-sm mt-1">{errors.idNumber}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Email")} <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Số điện thoại */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Số điện thoại")} <span className="text-red-600">*</span>
                    </label>
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Địa chỉ */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Địa chỉ")}
                    </label>
                    <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Tỉnh/Thành */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Tỉnh/Thành phố")}
                    </label>
                    <input
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Quận/Huyện */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Quận/Huyện")}
                    </label>
                    <input
                        name="district"
                        value={form.district}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Cơ quan/Đơn vị (hiển thị nổi bật hơn nếu chọn tổ chức) */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Cơ quan / Đơn vị công tác")}
                    </label>
                    <input
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            form.memberType === "organization" ? "border-red-400" : "border-gray-300"
                        }`}
                    />
                    {errors.organization && <p className="text-red-600 text-sm mt-1">{errors.organization}</p>}
                </div>

                {/* Chức vụ */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Chức vụ")}
                    </label>
                    <input
                        name="position"
                        value={form.position}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Ghi chú */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Ghi chú / Lý do tham gia")}
                    </label>
                    <textarea
                        name="note"
                        value={form.note}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Điều khoản */}
                <div className="md:col-span-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            id="agree"
                            type="checkbox"
                            name="agree"
                            checked={form.agree}
                            onChange={handleChange}
                            className="mt-1 w-5 h-5 text-blue-600 rounded"
                        />
                        <span className="text-sm text-gray-700">
              {t("Tôi đã đọc, hiểu và đồng ý với")}{" "}
                            <a
                                href="/terms"
                                target="_blank"
                                className="text-blue-600 hover:underline font-medium"
                            >
                {t("Điều khoản và Điều kiện")}
              </a>{" "}
                            {t("của Hiệp hội")}
            </span>
                    </label>
                    {errors.agree && <p className="text-red-600 text-sm mt-1">{errors.agree}</p>}
                </div>

                {/* Nút submit */}
                <div className="md:col-span-2 text-center mt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold text-lg rounded-lg shadow-lg hover:from-blue-800 hover:to-blue-950 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        {loading ? t("Đang xử lý...") : t("GỬI ĐĂNG KÝ")}
                    </button>
                </div>
            </form>

            <p className="text-center text-sm text-gray-500 mt-10">
                {t("Sau khi gửi, Ban Thư ký sẽ liên hệ xác nhận trong vòng 3-5 ngày làm việc.")}
            </p>
        </div>
    );
}