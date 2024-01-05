import HomeLogo from "@/components/homelogo";
import MenuIcon from "@/components/icons/menu";
import TiktokIcon from "@/components/icons/tiktok";
import { ArrowRight } from "react-feather";
import BdayCard from "@/components/bdaycard";
import Footer from "@/layout/footer";

export default function () {
	return (
		<main>
			<div className="h-screen min-h-[500px] bg-[#0D2240]">
				<div className="container mx-auto">
					<div className="flex justify-between items-center px-6 py-4 mb-20">
						<MenuIcon />
						<HomeLogo />
						<TiktokIcon />
					</div>
					<div className="mx-auto text-center text-white">
						<p className="xl:leading-[140px] xl:text-[120px] lg:leading-[120px] lg:text-[110px] md:leading-[100px] md:text-[80px] sm:leading-[80px] sm:text-[60px] text-5xl font-black text-nowrap hometypo mb-10">
							Birthday Energy
							<br />
							Meets Pro Sports
						</p>
						<p className="font-light xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-14">
							1,377 BDAY CARDS & COUNTING
						</p>
						<div className="relative inline-block w-10/12 max-w-[710px]">
							<input
								type="text"
								placeholder="Search Bday Stats"
								className="w-full rounded-lg xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base xl:py-8 lg:py-7 md:py-6 sm:py-5 py-4 xl:pl-9 lg:pl-8 md:pl-7 sm:pl-6 pl-5 xl:pr-32 lg:pr-28 md:pr-24 sm:pr-20 pr-16 text-gray-700"
							/>
							<div className="xl:w-[120px] lg:w-[104px] md:w-[88px] sm:w-[72px] w-[56px] h-full rounded-lg bg-[#E42D1E] absolute right-0 top-0 grid place-items-center">
								<ArrowRight size={40} strokeWidth={4} color="#fff" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#F5F5F5]">
				<div className="container mx-auto px-4 py-20">
					<div className="flex justify-between mb-10">
						<div className="text-3xl font-bold">🎉 Today's Featured Bday Cards</div>
						<div className="text-3xl font-bold underline underline-offset-8 cursor-pointer">See all</div>
					</div>
					<div className="flex justify-between mb-[84px]">
						<BdayCard />
						<BdayCard />
						<BdayCard />
					</div>
					<div className="text-center font-light text-[32px] uppercase">
						Tracking NBA Birthday Statistics Since 1976
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
