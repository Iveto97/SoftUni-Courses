

export async function deleteView(ctx) {
    const confirmed = confirm("Are you sure?");
    if(confirmed) {
        const id = ctx.params.id;
        const response = await ctx.del(`data/characters/${id}`);
        ctx.goTo('/dashboard');
    }
}