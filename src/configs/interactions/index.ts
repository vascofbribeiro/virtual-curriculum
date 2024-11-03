import { IEvent } from "../../interfaces/modules/IEvent";

export const walkUp: Record<"events", IEvent[]>[] = [
    {
        events: [
            {type: 'walk', who: 'miniMe', direction: 'up' },
        ],
    },
];

export const coffee: Record<"events", IEvent[]>[] = [
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Remember to take regular breaks! A fresh perspective can be the best debugging tool.`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Stuck on a bug? Get a coffee and try a 'rubber duck debugging' session.
                    Explaining the problem out loud, even to an imaginary listener, often helps you spot mistakes.`,
            },{
                type: 'message', 
                text: `Explaining the problem out loud, even to an imaginary listener, often helps you spot mistakes.`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Spill-proof your code! Always handle errors gracefully to avoid user frustration`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Repetitive tasks are like filling your cup every five minutes—automate them to save time!`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Strong brew in small cup. Write short, modular functions that do one thing well—this keeps your code easy to test and reuse.`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Sip before you serve! Test small components independently before integrating them into the larger codebase.`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Use your energy (and your computer’s) wisely—optimize code to avoid unnecessary loops or complex calculations.`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Keep learning! Just like coffee, development trends and best practices are always evolving.`,
            },
        ],
    }
];

export const pizza:  Record<"events", IEvent[]>[] = [
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Cut your code in slices! Break down large functions into smaller ones! It’s easier to test, debug, and understand your code.`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Keep your code like a well-made pizza—balanced and easy to digest.`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Lightweight code loads faster and is easier to maintain, just like a thin-crust pizza is easy to handle!`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Share the pizza! Document for teamwork`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Choose the right ingredients. Select tools and libraries that are lightweight and fit your project’s needs.`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Deliver with precision. Code reviews help catch mistakes, improve quality, and deliver better results`,
            },
        ],
    }
]

export const iceCream:  Record<"events", IEvent[]>[] = [
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Stay fresh with refactoring. Refactor regularly to keep your codebase efficient and readable.`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Caching is like freezing your code's responses—serve data faster by storing frequent responses locally or in a cache`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Prevent ‘code brain freeze’ by limiting redundant or nested loops`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Mix up flavors - Use web workers!`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Scoop it right - Reduce payloads!`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Less sugar, more speed! Limit large libraries or heavy plugins`,
            },
        ],
    },
    {
        events: [
            {type: 'idle', who: 'miniMe', direction: 'up' },
            {
                type: 'message', 
                text: `Seller: Cool components with lazy loading`,
            },
        ],
    }
]

export const bench: Record<"events", IEvent[]>[] = [
    {
        events: [
            {
                type: 'message',
                text: `A small bench to take a rest`
            },
            {
                type: 'sober',
                who: 'miniMe'
            },
        ],
    },
]