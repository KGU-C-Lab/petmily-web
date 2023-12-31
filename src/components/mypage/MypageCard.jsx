import PropTypes from 'prop-types';

const MypageCard = ({ className, onClick, icon, label, text }) => {
  return (
    <div
      className={`flex w-full cursor-pointer justify-between border-b-4 p-4 transition duration-150 ease-in-out ${className}`}
      onClick={onClick}
    >
      <div className="mr-4 flex items-center justify-center rounded-lg bg-gray-200 p-4">
        {icon}
      </div>

      <div>
        <p className="text-2xl font-semibold">{label}</p>
        <p className="text-xs text-gray-500">{text}</p>
      </div>
    </div>
  );
};

MypageCard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MypageCard;
