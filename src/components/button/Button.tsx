// with CSS modules you have to import classes as an object
// You use classes.class or classes['class'] to access classes
import classes from './button.module.scss';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = true,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? classes['storybook-button--primary'] : classes['storybook-button--secondary'];

  return (
    <button
      type="button"
      className={[classes['storybook-button'], classes[`storybook-button--${size}`], mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
  
};
