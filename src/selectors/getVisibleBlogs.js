export const getVisibleBlogs = (blogs, { text, sortBySearch, sortByDate }) => {
    return blogs
        .filter((blog) => {
            if (sortBySearch === "title") {
                const textMatch = blog.title.toLowerCase().includes(text.toLowerCase());

                return textMatch;
            } else if (sortBySearch === "titleAndDescription") {
                const textMatch =
                    blog.title.toLowerCase().includes(text.toLowerCase()) ||
                    blog.description.toLowerCase().includes(text.toLowerCase());

                return textMatch;
            }
        })
        .sort((a, b) => {
            if (sortByDate === "new") {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else if (sortByDate === "past") {
                return a.createdAt > b.createdAt ? 1 : -1;
            }
        });
};
