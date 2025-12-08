import { MdOutlineAirplanemodeActive } from "react-icons/md";

interface Props {
  theme: string;
}

const Footer = ({ theme }: Props) => {
  const footer = "navbar navbar-dark bg-".concat(theme);
  return (
    <nav className={footer}>
      <div className="col-6">
        <a>
          <MdOutlineAirplanemodeActive />
        </a>
      </div>
      <label htmlFor="">@F4riaSolutions</label>
    </nav>
  );
};

export default Footer;
