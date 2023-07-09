interface Props {
  icon: "Arrow" | "Moon" | "Sun" |undefined;
} 

function Icon({icon}:Props) {
  if(icon === "Arrow") {
    return ( 
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.106788 1.24531C-0.129265 0.804836 0.0508176 0.285304 0.404468 0.0848014C0.675702 -0.068976 1.00406 0.0682097 1.29635 0.176769L3.8006 1.10689C3.86506 1.13083 3.93124 1.15361 4 1.15361C4.06876 1.15361 4.13494 1.13083 4.1994 1.10689L6.70365 0.17677C6.99593 0.0682101 7.3243 -0.0689758 7.59553 0.0848015C7.94918 0.285304 8.12926 0.804835 7.89321 1.2453L4.4147 7.73614C4.22616 8.08795 3.77384 8.08795 3.5853 7.73614L0.106788 1.24531Z" fill="white"/>
      </svg>
     );
  }
  if(icon === "Moon") {
    return ( 
      <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="75" fill="#EEE"/>
        <path d="M131.779 25.902C121.717 14.253 108.129 5.733 92.674 2A23.427 23.427 0 0 0 86 18.405c0 12.98 10.522 23.5 23.5 23.5 10.357 0 19.15-6.7 22.279-16.003ZM44.5 64C51.955 64 58 57.956 58 50.5S51.955 37 44.5 37 31 43.044 31 50.5 37.045 64 44.5 64ZM67.5 127a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM38 98.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM64.5 89a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM124 70.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 1 1 7 0ZM90 74a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM143 95.5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0Z" fill="#000"/>
      </svg>
     );
  }
  if(icon === "Sun") {
    return ( 
      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"  fill="none" >
        <circle cx="75" cy="75" r="74" fill="#FEE999" stroke="#FFF6D7" strokeWidth="2"/>
        <circle cx="75" cy="75" r="66" fill="#FFC23B"/>
        <circle cx="75" cy="75" r="58" fill="#FEA600"/>
      </svg>
     );
  }
  return <></>
}

export default Icon;