package com.bbb.pjtname.api.controller;

import com.bbb.pjtname.api.service.GameService;
import io.openvidu.java.client.OpenVidu;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import io.openvidu.java.client.Session;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.ArrayDeque;
import java.util.Map;
import java.util.Queue;

@Slf4j
@RestController
@RequestMapping("/game")
@RequiredArgsConstructor
@Api(tags = {"게임 API"}) //Swagger에 보여줄 명칭
public class GameController {

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";
    private final GameService gameService;

    // OpenVidu 서버 URL 및 암호키(BBB) 설정 (application.properties에서 가져옴)
    @Value("${OPENVIDU_URL}")
    private String OPENVIDU_URL;
    @Value("${OPENVIDU_SECRET}")
    private String OPENVIDU_SECRET;

    // OpenVidu 객체 (session, connection 생성 용도)
    private OpenVidu openVidu;

    // 대기방 큐
    private Queue<Session> standbyRooms;

    // 방 생성 관련 상수 변수

    // 최초 생성 방 갯수 (pool)
    private static final int INITIAL_ROOM_NO = 10;
    // 현재 대기방이 최초 방 갯수 대비 특정 비율(REDZONE) 하락했을 경우
    // 대기 pool에 방을 추가해준다
    private static final double POOL_REDZONE_RATIO = 0.5;
    private static final int POOL_REDZONE_NO = (int) (INITIAL_ROOM_NO * POOL_REDZONE_RATIO);

    // 대기방 갯수가 특정 비율 이상 하락했을 시 추가해주는 방 갯수
    private static final double POOL_ADDITION_RATIO = 0.3;
    private static final int POOL_ADDITION_NO = (int) (INITIAL_ROOM_NO * POOL_ADDITION_RATIO);

    @PostConstruct
    public void init() throws OpenViduJavaClientException, OpenViduHttpException {
        // OpenVidu 객체 초기화 (WAS 띄우고 한번만 실행 (@PostConstruct))
        this.openVidu = new OpenVidu(OPENVIDU_URL, OPENVIDU_SECRET);

        // 대기방 큐 초기화
        standbyRooms = new ArrayDeque<>();

        // 최초 방 갯수만큼 Session 생성 + 큐에 추가
        for (int i = 0; i < INITIAL_ROOM_NO; i++) {
            Session session = openVidu.createSession();
            standbyRooms.add(session);
        }
    }

    // OpenVidu 세션(방) 생성 및/또는 입장
    @ApiOperation(value = "게임 방 생성 및/또는 입장")
    @PostMapping("/session")
    public ResponseEntity<Map<String, Object>> enterRoom() {

        return null;
    }
}
