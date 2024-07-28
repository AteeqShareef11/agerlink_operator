/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
export const customTextFiled = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#F4F6F8',
    },
    '&:hover fieldset': {
      borderColor: '#F4F6F8',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F4F6F8',
    },
  },
};

export const customTextFiledO = {
  '&.MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#F4F6F8',
    },
    '&:hover fieldset': {
      borderColor: '#F4F6F8',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F4F6F8',
    },
  },
};

export const customTextFiledDark = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
    },
    '&:hover fieldset': {
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
  },
};

export const customSelect = {
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: '#F4F6F8',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#F4F6F8',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#F4F6F8',
  },
  '.MuiSvgIcon-root ': {
    fill: 'black !important',
    backgroundColor: '#F4F6F8',
    borderRadius: 20,
    padding: '5px',
    marginRight: '10px',
  },
};

export const customSelectPin = {
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: '#E9E9E9',
    backgroundColor: '#fff',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#E9E9E9',
    backgroundColor: '#fff',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#E9E9E9',
    backgroundColor: '#fff',
  },
  '.MuiSvgIcon-root ': {
    fill: 'black !important',
    backgroundColor: '#fff',
    border: '1px solid #E9E9E9',
    borderRadius: 20,
    padding: '5px',
    // marginLeft: "16px !important",
  },
};

export const customSelectDark = {
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: '#000',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#000',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#000',
  },
  '.MuiSvgIcon-root ': {
    fill: 'black !important',
  },
};

export const placeholderStye = {
  sx: {
    '&::placeholder': {
      color: '#F4F6F8',
      opacity: 1,
      fontWeight: 100,
    },
  },
};

// export const InputPropsStyle = {
//     sx: {
//         borderRadius: 10, color: '#F4F6F8', pl: 1, fontWeight: 100,
//     },

// };
export const InputPropsStyle = (isAutoFilled) => ({
  sx: {
    borderRadius: 10,
    color: '#F4F6F8',
    pl: isAutoFilled ? 0 : 1,
    // p: isAutoFilled ? 0 : 1,

    fontWeight: isAutoFilled ? 400 : 100,
  },
});

export const InputPropsStyleDark = {
  sx: {
    borderRadius: 10,
    color: '#000',
    fontWeight: 500,
    opacity: 1,
  },
};

export const placeholderStyeDark = {
  sx: {
    '&::placeholder': {
      color: '#000',
      opacity: 1,
      fontWeight: 300,
    },
  },
};

export const RenderValueWrapper = ({ value, placeholder }) => (
  <span
    style={{
      color: '#F4F6F8',
      fontWeight: 100,
      paddingLeft: '9px',
    }}
  >
    {value?.length ? (Array.isArray(value) ? value.join(', ') : value) : placeholder}
  </span>
);
