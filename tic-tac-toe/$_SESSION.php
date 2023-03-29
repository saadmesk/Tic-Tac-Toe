<?php
session_start();
if (!isset($_SESSION['score'])) {
    $_SESSION['score'] = [];
}
if (!isset($_SESSION['leaderboard'])) {
    $_SESSION['leaderboard'] = [];
}

function addScore($name, $score) {
    $scores = $_SESSION['score'];
    $scores[$name] = $score;
    $_SESSION['score'] = $scores;
    updateLeaderboard($name, $score);
}

function updateLeaderboard($name, $score) {
    $leaderboard = $_SESSION['leaderboard'];
    $leaderboard[$name] = $score;
    arsort($leaderboard);
    $_SESSION['leaderboard'] = array_slice($leaderboard, 0, 10);
}

function getLeaderboard() {
    $leaderboard = $_SESSION['leaderboard'];
    return json_encode($leaderboard);
}
?>
