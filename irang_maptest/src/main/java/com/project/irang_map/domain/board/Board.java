package com.project.irang_map.domain.board;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.project.irang_map.domain.Timestamped;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
@Entity
public class Board extends Timestamped{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //제목
    @Column(length = 150, nullable = false)
    private String title;

    //게시글
    @Column(length = 2000, nullable = false)
    private String content;

    //작성자
    @Column(length = 50, nullable = false)
    private String writer;

    //비밀번호-작성글 수정하려면 글 등록할때 입력한 비밀번호 입력해야함, db에 암호화해서 보관하고싶음
    @Column(length = 20, nullable = false)
    private String password;

    // @CreationTimestamp
    // @Column(nullable = false)
    // private LocalDate createDate;

    // @UpdateTimestamp
    // @Column(nullable = false)
    // private LocalDate modifyDate;


    @Builder
    public Board(String title, String content, String writer, String password){
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.password = password;
    }
}
