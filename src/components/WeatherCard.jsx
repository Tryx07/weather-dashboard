export default function WeatherCard() {
    return (
        <div
            className="
        /* Layout & Spacing */
        w-[628px] h-96 my-5
        grid place-items-center text-center

        /* Shape */
        rounded-[40px] border

        /* Light mode background & effects */
        bg-stone-100
        backdrop-blur-[20px]

        /* Light mode shadows (unverändert – einzeln gelassen) */
        shadow-[inset_10px_10px_25px_0px_rgba(172,175,169,0.90)]
        shadow-[inset_-10px_-10px_20px_0px_rgba(255,255,255,0.90)]
        shadow-[inset_10px_-10px_20px_0px_rgba(172,175,169,0.20)]
        shadow-[inset_-10px_10px_20px_0px_rgba(172,175,169,0.20)]

        /* Dark mode background & effects */
        dark:bg-transparent
        dark:bg-gradient-to-br dark:from-purple-50/25 dark:to-fuchsia-200/5
        dark:border-fuchsia-200
        dark:shadow-[0px_0px_30px_5px_rgba(4,30,123,0.50)]
      "
        >
            <p className="font-bold text-5xl">I'm a Weather-Card</p>
        </div>
    );
}
