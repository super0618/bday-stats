import Image from "next/image";
import { ArrowRight } from "react-feather";

export default function () {
	return (
		<div className="w-[410px] rounded-md border-2 border-black text-center bg-white py-5 px-7 bdaycard">
			<div className="flex justify-between">
				<div className="relative basis-32">
					<Image
						src="/assets/images/balloons.png"
						alt="balloons"
						width={128}
						height={164}
						className="absolute -top-2 -left-4 opacity-25 -rotate-[30deg]"
					/>
				</div>
				<div className="text-right text-xl">
					<div className="font-black">Birthday</div>
					<div>2/27/96</div>
				</div>
			</div>
			<div>
				<Image src="/assets/images/203999.png" alt="balloons" width={202} height={148} className="mx-auto" />
			</div>
			<p className="mx-auto text-4xl font-bold p-1.5">Nikola Jokić</p>
			<p className="mx-auto text-[18px] font-light mb-2">3 BDAY GAMES</p>
			<div className="flex text-[26px] p-4">
				<div className="text-[#8A8A8A] grow">
					<p>PPG</p>
					<p>RPG</p>
					<p>APG</p>
				</div>
				<div className="text-center grow-[2] border-x-2 font-medium">
					<p>34.6</p>
					<p>10.3</p>
					<p>9.5</p>
				</div>
				<div className="text-right grow font-bold ">
					<p className="text-[#01BB89]">+24%</p>
					<p className="text-[#01BB89]">+4%</p>
					<p className="text-[#F53210]">-14%</p>
				</div>
			</div>
			<div className="text-right p-4 font-semibold text-2xl">
				view profile
				<ArrowRight size={20} strokeWidth={3} className="inline-block mx-1" />
			</div>
		</div>
	);
}
