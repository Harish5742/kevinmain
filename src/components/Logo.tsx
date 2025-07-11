interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <img
        src="/assets/Light.png" // Path relative to public/
        alt="Logo"
        className="h-10 w-auto" // You can adjust height/width
      />
    </div>
  );
};

export default Logo;
