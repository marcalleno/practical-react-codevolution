import React, { useState } from "react";
import { ChromePicker } from "react-color";

function ColorPicker() {
  const [color, setColor] = useState("#FFF");
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div>
      <h2>Color Picker Component</h2>
      <button
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? "Tutup Color Picker" : "Pilih warna"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
      <h2>Kamu memilih warna {color}</h2>
    </div>
  );
}

export default ColorPicker;
