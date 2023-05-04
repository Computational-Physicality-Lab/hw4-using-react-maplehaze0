import BeepBoopWhiteFront from "../../assets/imgs/imgs2/beepboop-white-front.png";
import BeepBoopWhiteBack from "../../assets/imgs/imgs2/beepboop-white-back.png";
import BeepBoopBlueFront from "../../assets/imgs/imgs2/beepboop-blue-front.png";
import BeepBoopBlueBack from "../../assets/imgs/imgs2//beepboop-blue-back.png";
import BeepBoopPinkFront from "../../assets/imgs/imgs2/beepboop-pink-front.png";
import BeepBoopPinkBack from "../../assets/imgs/imgs2/beepboop-pink-back.png";
import BeepBoopRedFront from "../../assets/imgs/imgs2/beepboop-red-front.png";
import BeepBoopRedBack from "../../assets/imgs/imgs2/beepboop-red-back.png";

import CarWhiteFront from "../../assets/imgs/imgs2/car-white-front.png";
import CarWhiteBack from "../../assets/imgs/imgs2/car-white-back.png";
import CarBlueFront from "../../assets/imgs/imgs2/car-blue-front.png";
import CarBlueBack from "../../assets/imgs/imgs2/car-blue-back.png";
import CarGreenFront from "../../assets/imgs/imgs2/car-green-front.png";
import CarGreenBack from "../../assets/imgs/imgs2/car-green-back.png";
import CarYellowFront from "../../assets/imgs/imgs2/car-yellow-front.png";
import CarYellowBack from "../../assets/imgs/imgs2/car-yellow-back.png";
import CarRedFront from "../../assets/imgs/imgs2/car-red-front.png";
import CarRedBack from "../../assets/imgs/imgs2/car-red-back.png";

import PlaidWhiteFront from "../../assets/imgs/imgs2/plaid-white-front.png";
import PlaidWhiteBack from "../../assets/imgs/imgs2/plaid-white-back.png";
import PlaidPinkFront from "../../assets/imgs/imgs2/plaid-pink-front.png";
import PlaidPinkBack from "../../assets/imgs/imgs2/plaid-pink-back.png";

import MelonWhiteFront from "../../assets/imgs/imgs2/melon-white-front.png";
import MelonWhiteBack from "../../assets/imgs/imgs2/melon-white-back.png";

import DefaultMaleFront from "../../assets/imgs/imgs2/default-m-front.png";
import DefaultMaleBack from "../../assets/imgs/imgs2/default-m-back.png";
import DefaultFemaleFront from "../../assets/imgs/imgs2/default-w-front.png";
import DefaultFemaleBack from "../../assets/imgs/imgs2/default-w-back.png";


export default [{
    "name": "Beep Boop",
    "description": "Once upon a time, a mighty guide guarded the intersection of Forbes and Morewood, and would dutifully direct distracted college students when it was safe to cross the street. Its voice was soothing, strong, and steady. Its name was beep boop.",
    "price": "$19.99",
    "colors": {
        "white": {
            "front": BeepBoopWhiteFront,
            "back": BeepBoopWhiteBack
        },
        "blue": {
            "front": BeepBoopBlueFront,
            "back": BeepBoopBlueBack
        },
        "pink": {
            "front": BeepBoopPinkFront,
            "back": BeepBoopPinkBack
        },
        "red": {
            "front": BeepBoopRedFront,
            "back": BeepBoopRedBack
        }
    },
    "default": {
        "front": DefaultMaleFront,
        "back": DefaultMaleBack
    }
},
{
    "name": "Car-negie Mellon",
    "description": "As you move in to campus, one of the first memories so many students have is driving up to their dorm, unloading their bags, and moving in. How do they arrive to campus? By car, of course!",
    "price": "$10.99",
    "colors": {
        "white": {
            "front": CarWhiteFront,
            "back": CarWhiteBack
        },
        "blue": {
            "front": CarBlueFront,
            "back": CarBlueBack
        },
        "green": {
            "front": CarGreenFront,
            "back": CarGreenBack
        },
        "yellow": {
            "front": CarYellowFront,
            "back": CarYellowBack
        },
        "red": {
            "front": CarRedFront,
            "back": CarRedBack
        }
    },
    "default": {
        "front": DefaultFemaleFront,
        "back": DefaultFemaleBack
    }
},
{
    "name": "Forever Plaid",
    "price": "$13.99",
    "description": "Proudly wear your tartan plaid as a patch on your front shirt pocket. And on the back, ask the important question that all CMU students should know the answer to: got plaid?",
    "colors": {
        "white": {
            "front": PlaidWhiteFront,
            "back": PlaidWhiteBack
        },
        "pink": {
            "front": PlaidPinkFront,
            "back": PlaidPinkBack
        }
    },
    "default": {
        "front": DefaultFemaleFront,
        "back": DefaultFemaleBack
    }
},
{
    "name": "Carnegie Mellon Melon",
    "description": "Andrew Mellon? Or Watermelon? We may never truly know who the true Mellon is, but this shirt definitely has an opinion. Add some summer fruit to your school spirt!",
    "price": "$6.99",
    "colors": {
        "white": {
            "front": MelonWhiteFront,
            "back": MelonWhiteBack
        }
    },
    "default": {
        "front": DefaultMaleFront,
        "back": DefaultMaleBack
    }
}];