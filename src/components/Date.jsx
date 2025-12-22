import Countdown from "react-countdown";
import { useTranslation } from "react-i18next";

const SHOW_DATE = new window.Date("2026-03-01T18:00:00");

const ShowCountdown = () => {
  const { t } = useTranslation("main");
  return (
    <Countdown
      date={SHOW_DATE}
      renderer={({ days, hours, minutes }) => (
        <span>
          {days}
          {t("days")} {hours}
          {t("hours")} {minutes}
          {t("minutes")}
        </span>
      )}
    />
  );
};

export default ShowCountdown;
