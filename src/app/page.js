"use client"
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const currentColor = useSelector((state) => state.color.color);
  console.log("current color: ", currentColor);
  return (
    <div>
      Hello
    </div>
  );
}
