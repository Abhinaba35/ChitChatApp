const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="mt-2">
      <label className="block text-sm mb-1">Gender</label>
      <div className="flex gap-4">
        <label className="w-1/2">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={selectedGender === "Male"}
            onChange={() => onCheckboxChange("Male")}
            className="hidden peer"
          />
          <div className="w-full text-center px-4 py-2 rounded-md border border-slate-600 peer-checked:bg-blue-500 peer-checked:text-white transition duration-200 cursor-pointer">
            Male
          </div>
        </label>

        <label className="w-1/2">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={selectedGender === "Female"}
            onChange={() => onCheckboxChange("Female")}
            className="hidden peer"
          />
          <div className="w-full text-center px-4 py-2 rounded-md border border-slate-600 peer-checked:bg-pink-500 peer-checked:text-white transition duration-200 cursor-pointer">
            Female
          </div>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
