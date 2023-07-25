const { Client } = require("@notionhq/client");

const notion_client = new Client({ auth: process.env.NOTION_API_KEY });

export default notion_client;
