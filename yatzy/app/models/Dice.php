<?php
namespace Yatzy;

class Dice {
  private $value;

  public function __construct() {
    $this->value = null;
  }

  public function roll() {
    $this->value = rand(1, 6);
    return $this->value;
  }

  public function getValue() {
    return $this->value;
  }
}
