// WIP so I'll just ignore the rules for now
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPost {
    id: string;
    properties: {
        Page: {
            title: {
                plain_text: string;
            }[];
        };
        Slug: {
            rich_text: {
                plain_text: string;
            }[];
        };
        Preview: {
            rich_text: {
                plain_text: string;
            }[];
        };
        Date: {
            date: {
                start: string;
            };
        };
    };
    created_time: string;
}