import "./style.css";
import carImg from "../../assets/carImg.png";
import MainButton from "../MainButton";

export default function CarCard() {
  return (
    <>
      <div className="ct-card">
        <img src={carImg} alt="" />
        <h3>Audi Supra TT</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita
          quisquam nemo omnis
        </p>
        <MainButton />
      </div>
    </>
  );
}
