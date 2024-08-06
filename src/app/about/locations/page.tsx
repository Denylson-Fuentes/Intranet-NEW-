import Location from "../_components/location";

const mainLocations = [
    {
        image: 'url(/PC.jpg)',
        locationName: "Prosperity Center",
        extension: "Ext: 300",
        programList: ["NEW & NEW Capital", "Corporate Office", "Homeownership Program", "New Academy of Science and Arts", "Queens Care Clinic"]
    },
    {
        image: 'url(/Loma.jpg)',
        locationName: "Casa Loma",
        extension: "Ext: 350",
        programList: ["After-School Program"]
    },
    {
        image: 'url(/Villa.jpg)',
        locationName: "La Villa",
        extension: "Ext: 200",
        programList: ["After-School Program"]
    },
    {
        image: 'url(/Posada.jpg)',
        locationName: "La Posada",
        extension: "Ext:",
        programList: ["Case Management Program"]
    },
    {
        image: "Image",
        locationName: "East Los Angeles",
        extension: "Ext:",
        programList: ["East LA Business Source Center", "C-Gem"]
    },
    {
        image: "Image",
        locationName: "Van Nuys",
        extension: "Ext:",
        programList: ["Family Source Center-Van Nuys", "HPP", "KidsFirst"]
    },
    {
        image: "Image",
        locationName: "Zine Center",
        extension: "Ext: 400",
        programList: ["Family Source Center-Van Nuys", "HPP", "CCRC"]
    },
    {
        image: "Image",
        locationName: "Tierra Del Sol",
        extension: "Women's Business Center",
        programList: ["After-School Program"]
    }
];

const extraLocations = [
    {
        image: "Image",
        locationName: "EADS",
        extension: " ",
        programList: [" "]
    },
    {
        image: 'url(/Palmas.jpg)',
        locationName: "Tres Palmas",
        extension: " ",
        programList: ["5-keys ESL Classes"]
    },
    {
        image: "Image",
        locationName: "Toberman Village",
        extension: " ",
        programList: [" "]
    },
    {
        image: "Image",
        locationName: "Santa Cruz Terrance",
        extension: " ",
        programList: [" "]
    }
]

export default function Locations() {
    return (
        <div>
            <div className="content-center my-2 w-full h-[350px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/forest.jpg)' }}>
                <p className="text-white text-7xl text-center content-center font-bold tracking-wide">Locations</p>
            </div>

            <section className="flex-col bg-sky-900 p-1">
                <div className="bg-sky-600 p-1 my-1">
                    <p className="text-teal-500 font-bold text-2xl text-center">NEW Office and Program Sites</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center content-center bg-sky-600 p-2">
                    {mainLocations.map((location, index) => (
                        <Location
                            key={index}
                            image={location.image}
                            locationName={location.locationName}
                            extension={location.extension}
                            programList={location.programList}
                        />
                    ))}
                </div>
            </section>

            <section className="flex-col bg-sky-900 p-1">
                <div className="bg-sky-600 p-1 my-1">
                    <p className="text-teal-500 font-bold text-2xl text-center">Additional Housing Sites</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center content-center bg-sky-600 p-2">
                    {extraLocations.map((location, index) => (
                        <Location
                            key={index}
                            image={location.image}
                            locationName={location.locationName}
                            extension={location.extension}
                            programList={location.programList}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}