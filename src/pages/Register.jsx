import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Register() {
    const { t } = useContext(LanguageContext) || { t: (k) => k }; // fallback
    const [form, setForm] = useState({
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
        if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = t("Email không hợp lệ");
        if (!form.phone.match(/^[0-9()+\-\s]{7,20}$/)) e.phone = t("Số điện thoại không hợp lệ");
        if (!form.idNumber.trim()) e.idNumber = t("Vui lòng nhập CMND/CCCD/Hộ chiếu");
        if (!form.agree) e.agree = t("Bạn cần đồng ý điều khoản");
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
            if (!res.ok) throw new Error(await res.text());
            setMessage({ type: "success", text: t("Đăng ký thành công. Chúng tôi sẽ liên hệ với bạn.") });
            setForm({
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
            setMessage({ type: "error", text: err.message || t("Lỗi server, thử lại sau") });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">{t("Đăng ký hội viên")}</h1>

            {message && (
                <div className={`p-3 mb-4 rounded ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium">{t("Họ và tên")}</label>
                    <input name="fullName" value={form.fullName} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
                    {errors.fullName && <div className="text-red-600 text-sm mt-1">{errors.fullName}</div>}
                </div>

                <div>
                    <label className="block text-sm font-medium">{t("Giới tính")}</label>
                    <select name="gender" value={form.gender} onChange={handleChange} className="mt-1 block w-full rounded border p-2">
                        <option value="male">{t("Nam")}</option>
                        <option value="female">{t("Nữ")}</option>
                        <option value="other">{t("Khác")}</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium">{t("Ngày sinh")}</label>
                    <input type="date" name="dob" value={form.dob} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
                </div>

                <div>
                    <label className="block text-sm font-medium">{t("CMND/CCCD/Hộ chiếu")}</label>
                    <input name="idNumber" value={form.idNumber} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
                    {errors.idNumber && <div className="text-red-600 text-sm mt-1">{errors.idNumber}</div>}
                </div>

                <div>
                    <label className="block text-sm font-medium">{t("Email")}</label>
                    <input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
                    {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
                </div>

                <div>
                    <label className="block text-sm font-medium">{t("Số điện thoại")}</label>
                    <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
                    {errors.phone && <div className="text-red-600 text-sm mt-1">{errors.phone}</div>}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium">{t("Địa chỉ")}</label>
                    <input name="address" value={form.address} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
                </div>

                <div>
                    <label className="block text-sm font-medium">{t("Tỉnh/Thành")}</label>
                    <input name="city" value={form.city} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
                </div>

                <div>
                    <label className="block text-sm font-medium">{t("Quận/Huyện")}</label>
                    <input name="district" value={form.district} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
                </div>

                <div>
                    <label className="block text-sm font-medium">{t("Cơ quan/Đơn vị")}</label>
                    <input name="organization" value={form.organization} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
                </div>

                <div>
                    <label className="block text-sm font-medium">{t("Chức vụ")}</label>
                    <input name="position" value={form.position} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium">{t("Ghi chú")}</label>
                    <textarea name="note" value={form.note} onChange={handleChange} className="mt-1 block w-full rounded border p-2" rows="4" />
                </div>

                <div className="md:col-span-2 flex items-center space-x-3">
                    <input id="agree" type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
                    <label htmlFor="agree" className="text-sm">
                        {t("Tôi đồng ý với điều khoản và chính sách")}
                    </label>
                </div>
                {errors.agree && <div className="text-red-600 text-sm">{errors.agree}</div>}

                <div className="md:col-span-2">
                    <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">
                        {loading ? t("Đang gửi...") : t("Gửi đăng ký")}
                    </button>
                </div>
            </form>
        </div>
    );
}