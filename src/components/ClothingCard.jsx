import IconText from "./IconText";
import { Shirt } from "lucide-react";
import CardTemplate from "./CardTemplate";
import {glassesSun, hatBaseball, jacket, shorts, skirt, sneaker, socks} from "@lucide/lab";

function ClothingCard() {

    return (
        <CardTemplate title="Clothing-Recommendation" className="col-start-3 min-w-0 min-h-0 grid p-5">
            <section className="w-full h-full">
                <div className="border-b dark:border-fuchsia-200 border-stone-800 p-2">
                    <span className="text-5xl font-extrabold">SmartWear</span>
                </div>
                <div className="grid grid-cols-2 gap-5 p-5">
                    <div className="flex flex-col gap-2">
                        <IconText Icon={glassesSun} Library="lab" IconClass="w-8 h-8" Text="Sunglasses" />
                        <IconText Icon={jacket} Library="lab" IconClass="w-8 h-8" Text="Thin Jacket" />
                        <IconText Icon={Shirt} IconClass="w-8 h-8" Text="short-sleeve Shirt" />
                        <IconText Icon={shorts} Library="lab" IconClass="w-8 h-8" Text="Shorts" />
                        <IconText Icon={sneaker} Library="lab" IconClass="w-8 h-8" Text="Sneakers" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <IconText Icon={hatBaseball} Library="lab" IconClass="w-8 h-8" Text="Baseball Cap" classNameWrapper="col-start-2" />
                        <span className="w-full h-full" />
                        <IconText Icon={skirt} Library="lab" IconClass="w-8 h-8" Text="Skirt" classNameWrapper="col-start-2" />
                        <IconText Icon={socks} Library="lab" IconClass="w-8 h-8" Text="Sandals" classNameWrapper="col-start-2" />
                    </div>
                </div>
            </section>
        </CardTemplate>
    )
}

export default ClothingCard;