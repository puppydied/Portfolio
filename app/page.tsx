import Lanyard from '@/components/Lanyard';
import RotatingText from '@/components/RotatingText';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080c10]">
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center gap-2">
              <h1 className="text-white text-2xl font-bold">Hi, I'm Yuda</h1>
              <RotatingText
                texts={['FRONT-END DEVELOPER', 'UI ENTHUSIAST', 'LIFELONG LEARNER']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#48aaad] text-black overflow-hidden py-0.5 sm:py-1
                              justify-center rounded-lg text-2xl font-bold inline-flex transition-all duration-300 ease-in-out"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
