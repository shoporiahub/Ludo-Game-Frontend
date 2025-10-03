import styles from './ColorIcon.module.css';

interface ColorIconProps {
  color: string;
  imgSrc: string;  
  alt?: string; 
}

const ColorIcon = ({ color, imgSrc, alt }: ColorIconProps) => {

  return (
    <div className={styles.colorIcon}>
      <img src={imgSrc} alt={alt || `${color} icon`} className={styles.iconImage} />
    </div>
  );
};

export default ColorIcon;