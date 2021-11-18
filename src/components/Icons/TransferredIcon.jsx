import React from "react";

const TransferredIcon = ({ fill = "#fff", width = "27", height = "35" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 26.3956L8.69385 34.7459L8.69442 29.3711H24.0887V23.419H24.0882V19.3738L24.0887 19.257L24.0876 13.9238L18.1309 19.645L18.1315 23.4193H8.69527L8.69414 18.0445L0 26.3956ZM27 8.35084L18.3064 0L18.3059 5.37561H10.3722L10.2214 5.37504H2.91154L2.91097 5.66487V12.9695L2.91154 19.5844H3.84356L8.86848 14.758V13.1196L8.86905 12.9684V11.3275H18.3053L18.3064 16.7017L27 8.35084Z"
        fill={fill}
      />
    </svg>
  );
};

export default TransferredIcon;
