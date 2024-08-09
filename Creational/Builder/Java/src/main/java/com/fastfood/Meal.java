package main.java.com.fastfood;

public class Meal {
    private String mainItem;
    private String sideItem;
    private String drink;
    private String toy;

    public void setMainItem(String mainItem) {
        this.mainItem = mainItem;
    }

    public void setSideItem(String sideItem) {
        this.sideItem = sideItem;
    }

    public void setDrink(String drink) {
        this.drink = drink;
    }

    public void setToy(String toy) {
        this.toy = toy;
    }

    @Override
    public String toString() {
        return "Meal [Main Item: " + mainItem + ", Side Item: " + sideItem + ", Drink: " + drink + ", Toy: " + toy + "]";
    }
}
