import { SVGProps } from "react";
interface Props {
  className: string;
}
const RollerCoaster: React.FC<Props> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={200}
    height={200}
    viewBox="0 0 463 463"
    {...props}
  >
    <path d="M455.5 352h-.5V159.94a7.486 7.486 0 0 0-2.613-5.688 103.942 103.942 0 0 0-17.093-12.379C419.621 132.798 401.71 128 383.5 128c-30.364 0-57.138 11.978-77.445 34.644L247.5 220.919l-65.539-65.225c-.029-.029-.06-.052-.09-.081-.032-.031-.059-.064-.092-.094C162.604 137.774 137.645 128 111.5 128 54.43 128 8 174.43 8 231.5V352h-.5a7.5 7.5 0 0 0 0 15h448a7.5 7.5 0 0 0 0-15zM440 163.38V352h-33V146.175a87.873 87.873 0 0 1 20.778 8.68A88.863 88.863 0 0 1 440 163.38zm-47.995-19.968c0 .03-.004.058-.004.088V352h-33V146.283c7.779-2.17 15.973-3.282 24.5-3.282 2.847-.001 5.684.14 8.504.411zM317.096 172.8c7.898-8.85 16.946-15.798 26.904-20.756V352h-33V178.885l5.791-5.763c.105-.104.207-.211.305-.322zM104 334.727V352H71v-25.257a102.691 102.691 0 0 0 33 7.984zm15 .002a103.205 103.205 0 0 0 33-7.961V352h-33v-17.271zm48-15.857a103.913 103.913 0 0 0 14.763-11.375c.067-.062.133-.125.198-.19L200 289.354V352h-33v-33.128zm48-44.446 33-32.842V352h-33v-77.574zm48-47.77 33-32.842V352h-33V226.656zM56 162.621V271.5a7.5 7.5 0 0 0 15 0V152.826a87.85 87.85 0 0 1 33.01-9.506c-.001.06-.009.119-.009.179v152a7.5 7.5 0 0 0 15 0v-152c0-.057-.007-.113-.009-.169a88.139 88.139 0 0 1 33.019 9.482c-.002.071-.011.14-.011.211v120.809a7.5 7.5 0 0 0 15 0v-111.24a88.983 88.983 0 0 1 4.523 3.877L200 194.809v31.203a7.5 7.5 0 0 0 15 0v-16.275l21.868 21.763-65.389 65.075C155.099 311.682 133.803 320 111.5 320 62.701 320 23 280.299 23 231.5c0-27.8 12.889-52.642 33-68.879zM23 285.119a104.31 104.31 0 0 0 33.033 33.727 7.457 7.457 0 0 0-.033.654V352H23v-66.881zM329.188 122.906a7.477 7.477 0 0 0 3.169-.707c15.909-7.432 33.116-11.2 51.144-11.2 13.397 0 26.561 2.193 39.125 6.518a7.498 7.498 0 0 0 9.533-4.65 7.499 7.499 0 0 0-4.65-9.533C413.37 98.468 398.563 96 383.5 96c-20.237 0-39.581 4.242-57.492 12.609a7.5 7.5 0 0 0 3.18 14.297z" />
    <path d="M288.299 153.25a7.482 7.482 0 0 0 5.561-2.465 125.137 125.137 0 0 1 13.671-12.987 7.5 7.5 0 0 0-9.473-11.631 140.028 140.028 0 0 0-15.315 14.549 7.499 7.499 0 0 0 5.556 12.534z" />
  </svg>
);
export default RollerCoaster;
