import Image from "next/image";
import { ArrowRight, Twitter, Instagram, Facebook } from "react-feather";

export default function () {
	return (
		<div className="container mx-auto text-2xl">
			<div className="flex justify-between items-center py-16 border-b-2 border-gray-200">
				<Image
					src="/assets/images/giphy.gif"
					alt="giphy"
					width={375}
					height={320}
					className="grow-0 shrink-0"
				/>
				<div className="grow flex justify-around px-4">
					<div>
						<p className="font-bold">Bday Data</p>
						<p className="text-nowrap">Search</p>
						<p className="text-nowrap">Player Index</p>
						<p className="text-nowrap">Bday Calendar</p>
					</div>
					<div>
						<p className="font-bold">Information</p>
						<p className="text-nowrap">About</p>
						<p className="text-nowrap">Glossary</p>
						<p className="text-nowrap">Surprise!</p>
					</div>
				</div>
				<div className="rounded-[20px] border border-black grow-0 shrink-0 py-6 px-5 w-96">
					<p className="font-bold mb-2">You've Got Mail</p>
					<p className="font-normal leading-8 mb-2">Never miss another bday with our weekly emails.</p>
					<div className="relative">
						<input
							type="text"
							placeholder="Enter email address"
							className="text-[18px] py-[13px] pl-[21px] pr-14 w-full bg-[#F5F5F5] rounded-md"
						/>
						<div className="absolute grid top-0 right-0 bottom-0 w-12 place-items-center">
							<ArrowRight size={16} />
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between px-16 py-5 items-center">
				<Image src="/assets/images/logo.png" alt="logo" width={94} height={91} className="shrink-0 grow-0" />
				<div className="flex justify-center text-base font-medium">
					<div className="p-7">Terms</div>
					<div className="p-7">Privacy</div>
					<div className="p-7">Accessibility</div>
				</div>
				<div className="flex basis-40 justify-between">
					<div className="shrink-0 grow-0">
						<div className="rounded-full border-gray-200 w-[42px] h-[42px] border grid place-items-center">
							<Twitter size={16} color="#0A142F" fill="#0A142F" />
						</div>
					</div>
					<div className="shrink-0 grow-0">
						<div className="rounded-full border-gray-200 w-[42px] h-[42px] border grid place-items-center">
							<Instagram size={16} color="#0A142F" />
						</div>
					</div>
					<div className="shrink-0 grow-0">
						<div className="rounded-full border-gray-200 w-[42px] h-[42px] border grid place-items-center">
							<Facebook size={16} color="#0A142F" fill="#0A142F" strokeWidth={0.5} />
						</div>
					</div>
				</div>
			</div>
			<div className="py-8 text-center text-xs">
				Made with 🎂 in Denver © 2023 Bday Stats. All Rights Reserved
			</div>
		</div>
	);
}
