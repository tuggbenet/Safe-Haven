// Function to print "Safe Haven"
fun printSafeHaven() {
    println("Safe Haven")
}

// Main function to invoke printSafeHaven()
fun main() {
    printSafeHaven()
}

// Creating a custom class
class Shelter {
    // Private variables to store shelter details such as capacity, name and location
    private val capacity: Int
    private val name: String
    private val location: String

    // Constructor to initialize shelter details
    constructor(capacity: Int, name: String, location: String) {
        this.capacity = capacity
        this.name = name
        this.location = location
    }

    // Function to display shelter details
    fun displayShelterDetails() {
        println("Name: $name \nCapacity: $capacity \nLocation: $location")
    }
}

// Creating a subclass of Shelter class
class SafeHaven: Shelter {
    // Private variable to store type
    private val type: String

    // Constructor to initialize the type of the shelter
    constructor(type: String, capacity: Int, name: String, location: String): super(capacity, name, location) {
        this.type = type
    }

    // Overriding displayShelterDetails() to display type of the shelter
    override fun displayShelterDetails() {
        println("Type: $type \nName: $name \nCapacity: $capacity \nLocation: $location")
    }
}

// Main function to invoke classes and methods
fun main() {
    // Creating a Shelter object and invoking displayShelterDetails()
    val shelter = Shelter(50, "ABC Shelter", "London")
    shelter.displayShelterDetails()

    // Creating a SafeHaven object and invoking displayShelterDetails()
    val safeHaven = SafeHaven("Homeless", 75, "XYZ Shelter", "New York")
    safeHaven.displayShelterDetails()

    // Invoking printSafeHaven()
    printSafeHaven()
}