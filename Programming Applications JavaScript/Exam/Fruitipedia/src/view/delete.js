

export async function onDelete(ctx) {
    const id = ctx.params.id;
    const response = await ctx.del(`data/fruits/${id}`);
    ctx.goTo('/dashboard');
}