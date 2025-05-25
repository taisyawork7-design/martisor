import { useState } from "react";
import Lottie from "lottie-react";
import successAnimation from "../images/Animation - 1748178005116.json";
import { useTranslation } from "react-i18next";

export default function SimpleForm() {
    const { t } = useTranslation("main");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [showOverlay, setShowOverlay] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = t("validation.nameRequired");
        }

        if (!formData.email.trim()) {
            newErrors.email = t("validation.emailRequired");
        } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(formData.email)) {
            newErrors.email = t("validation.invalidEmail");
        }

        if (!formData.phone.trim()) {
            newErrors.phone = t("validation.phoneRequired");
        } else if (!/^[0-9()+\-\s]+$/.test(formData.phone)) {
            newErrors.phone = t("validation.invalidPhone");
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setShowOverlay(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
            setShowOverlay(false);
        }, 3000);
    };

    return (
        <div className="form" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("name")}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="input">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="input">
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t("phone")}
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                </div>

                <div className="input">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("message")}
                    />
                </div>

               
                    <button type="submit">
                        {t("buttonForm")}
                    </button>
               
            </form>

            {showOverlay && successAnimation && (
                <div className="overlay">
                    <Lottie animationData={successAnimation} className="lottie-animation" />
                </div>
            )}
        </div>
    );
}
