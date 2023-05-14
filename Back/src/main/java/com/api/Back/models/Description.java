package com.api.Back.models;

import javax.persistence.*;


/**
 * @author GibrillaKanu
 *
 */
@Entity
@Table(name = "description")
public class Description {

    // Attributes
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    public Description() {

    }

    public Description(String title, String description) {
        this.title = title;
        this.description = description;

    }

    // Properties
    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // Override Methods
    @Override
    public String toString() {
        return "Description [id=" + id + ", title=" + title + ", desc=" + description + "]";
    }

}
