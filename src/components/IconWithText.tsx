



const IconWithText = ({ icon, text }:any) => (
  <div className="flex items-center w-1/2 md:w-1/3 lg:w-1/4 mb-2">
    <span className="mr-2 flex-shrink-0">
      {icon}
      {/* Replace with your icon */}
    </span>
    <span>{text}</span>
  </div>
);

export default IconWithText;
