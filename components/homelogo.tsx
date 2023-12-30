import Image from "next/image";

export default function () {
	return (
		<div className="relative">
			<Image src="/assets/images/bday_stats.png" alt="bdaystats" width={145} height={110} />
			<Image
				src="/assets/images/white_balloons.png"
				alt="whiteballoons"
				width={78}
				height={88}
				className="absolute -top-1.5 right-2"
			/>
		</div>
	);
}
