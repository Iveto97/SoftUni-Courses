function pieceOfPie(pieFlavor, firstFlavorTarget, secondFlavorTarget) {

    const firstIndex = pieFlavor.indexOf(firstFlavorTarget);
    const secondIndex = pieFlavor.indexOf(secondFlavorTarget);
    const targets = pieFlavor.slice(firstIndex, secondIndex + 1);
    return targets
}

pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie')